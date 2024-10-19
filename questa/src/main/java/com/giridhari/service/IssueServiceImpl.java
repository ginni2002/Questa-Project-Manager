package com.giridhari.service;


import com.giridhari.modal.Issue;
import com.giridhari.modal.Project;
import com.giridhari.modal.User;
import com.giridhari.repository.IssueRepository;
import com.giridhari.request.IssueRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IssueServiceImpl implements IssueService{

    private final IssueRepository issueRepository;
    private final ProjectService projectService;
    private final UserService userService;
    @Autowired
    public IssueServiceImpl(IssueRepository issueRepository, ProjectService projectService, UserService userService){
        this.issueRepository = issueRepository;
        this.projectService = projectService;
        this.userService = userService;
    }

    @Override
    public Issue getIssueById(Long issueId) throws Exception {
        Optional<Issue> issue = issueRepository.findById(issueId);
        if(issue.isPresent()){
            return issue.get();
        }
        throw new Exception("No issues found with IssueId "+issueId);
    }

    @Override
    public List<Issue> getIssueByProjectId(Long projectId) throws Exception {
        return issueRepository.findByProjectID(projectId);
    }

    @Override
    public Issue createIssue(IssueRequest issueRequest, User user) throws Exception {

        Project project = projectService.getProjectById(issueRequest.getProjectId());

        Issue issue  = new Issue();
        issue.setTitle(issueRequest.getTitle());
        issue.setDescription(issueRequest.getDescription());
        issue.setStatus(issueRequest.getStatus());
        issue.setProjectID(issue.getProjectID());
        issue.setPriority(issueRequest.getPriority());
        issue.setDueDate(issueRequest.getDueDate());

        issue.setProject(project);
        return issueRepository.save(issue);
    }

    @Override
    public void deleteIssue(Long issueId, Long userId) throws Exception {
        getIssueById(issueId);
         issueRepository.deleteById(issueId);
    }

    @Override
    public Issue addUserToIssue(Long issueId, Long userId) throws Exception {
        User user = userService.findUserById(userId);
      Issue issue = getIssueById(issueId);

      issue.setAssignee(user);
      return issueRepository.save(issue);

    }

    @Override
    public Issue updateStatus(Long issueId, String status) throws Exception {
        Issue issue = getIssueById(issueId);

        issue.setStatus(status);
        return issueRepository.save(issue);

    }
}
