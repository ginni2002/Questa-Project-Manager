package com.giridhari.service;

import com.giridhari.modal.Issue;
import com.giridhari.modal.User;
import com.giridhari.request.IssueRequest;


import java.util.List;
import java.util.Optional;

public interface IssueService {

    Issue getIssueById(Long issueId) throws Exception;

    List<Issue> getIssueByProjectId(Long projectId) throws Exception;

    Issue createIssue(IssueRequest issueRequest, User user) throws Exception;

//    Optional<Issue> updateIssue(Long issueId, IssueRequest updatedIssue, Long userId) throws Exception;

    void deleteIssue(Long issueId, Long userId) throws Exception;

//    List<Issue> getIssueByAssigneeId(Long assigneeId) throws Exception;

//    List<Issue> searchIssues(String title, String status, String priority, Long assigneeId) throws Exception;

//    List<User> getAssigneeForIssue(Long issueId) throws Exception;

    Issue addUserToIssue(Long issueId, Long userId) throws Exception;

    Issue updateStatus(Long issueId, String status) throws Exception;

}
