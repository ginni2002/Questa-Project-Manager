package com.giridhari.service;

import com.giridhari.modal.Comments;
import com.giridhari.modal.Issue;
import com.giridhari.modal.User;
import com.giridhari.repository.CommentRepository;
import com.giridhari.repository.IssueRepository;
import com.giridhari.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class CommentServiceImpl implements CommentService {

    private final CommentRepository commentRepository;
    private final IssueRepository issueRepository;
    private final UserRepository userRepository;

    @Autowired
    public CommentServiceImpl(CommentRepository commentRepository, IssueRepository issueRepository, UserRepository userRepository){
        this.commentRepository = commentRepository;
        this.issueRepository = issueRepository;
        this.userRepository = userRepository;
    }

    @Override
    public Comments createComment(Long issueId, Long userId, String content) throws Exception {
        Optional<Issue> issueOptional = issueRepository.findById(issueId);
        Optional<User> userOptional = userRepository.findById(userId);

        if(issueOptional.isEmpty()){
            throw new Exception("Issue not found with id: "+issueId);
        }
        if(userOptional.isEmpty()){
            throw new Exception("User not found with id: "+userId);
        }

        Issue issue = issueOptional.get();
        User user = userOptional.get();

        Comments comments = new Comments();

        comments.setIssue(issue);
        comments.setUser(user);
        comments.setCreatedDateTime(LocalDateTime.now());
        comments.setContent(content);

        Comments savedComments = commentRepository.save(comments);
        issue.getComments().add(savedComments);

        return savedComments;
    }

    @Override
    public void deleteComment(Long commentId, Long userId) throws Exception {
    Optional<Comments> commentsOptional = commentRepository.findById(commentId);
    Optional<User> userOptional = userRepository.findById(userId);

    if(commentsOptional.isEmpty()){
        throw new Exception("Comment not found with id "+commentId);
    }
    if(userOptional.isEmpty()){
        throw new Exception("User not found with id: "+userId);
    }

    Comments comments = commentsOptional.get();
    User user = userOptional.get();

    if(comments.getUser().equals(user)){
        commentRepository.delete(comments);
    }else {
        throw new Exception("User does not have permission to delete this comment!");
    }
    }

    @Override
    public List<Comments> findCommentByIssueId(Long issueId) throws Exception {
       return commentRepository.findCommentByIssueId(issueId);
    }
}
