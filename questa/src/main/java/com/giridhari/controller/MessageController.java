package com.giridhari.controller;

import com.giridhari.modal.Chat;
import com.giridhari.modal.Message;
import com.giridhari.modal.User;
import com.giridhari.request.CreateMessageRequest;
import com.giridhari.service.MessageService;
import com.giridhari.service.ProjectService;
import com.giridhari.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
public class MessageController {

    private final MessageService messageService;
    private final UserService userService;
    private final ProjectService projectService;

    @Autowired
    public MessageController(MessageService messageService,
                             UserService userService,
                             ProjectService projectService){
        this.messageService = messageService;
        this.userService = userService;
        this.projectService = projectService;
    }

    @PostMapping("/send")
    public ResponseEntity<Message> sendMessage(@RequestBody CreateMessageRequest request) throws Exception{
        User user = userService.findUserById(request.getSenderId());

        Chat chats = projectService.getProjectById(request.getProjectId()).getChat();
        if(chats == null) throw new Exception("Chat not found");

        Message sentMessage = messageService.sendMessage(request.getSenderId(),request.getProjectId(),request.getContent());
        return ResponseEntity.ok(sentMessage);
    }

    @GetMapping("/chat/{projectId}")
    public ResponseEntity<List<Message>> getMessagesByChatId(@PathVariable Long projectId) throws Exception{
        List<Message> messages = messageService.getMessagesByProjectId(projectId);
        return ResponseEntity.ok(messages);
    }


}
