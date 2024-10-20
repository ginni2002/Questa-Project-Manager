package com.giridhari.repository;

import com.giridhari.modal.Comments;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;

public interface CommentRepository extends JpaRepository<Comments, Long> {

    List<Comments> findCommentByIssueId(Long issueId);
}
