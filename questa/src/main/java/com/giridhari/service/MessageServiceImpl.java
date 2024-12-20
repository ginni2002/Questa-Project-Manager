package com.giridhari.service;

import com.giridhari.modal.Chat;
import com.giridhari.modal.Message;
import com.giridhari.modal.User;
import com.giridhari.repository.MessageRepository;
import com.giridhari.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class MessageServiceImpl implements MessageService{

    private final MessageRepository messageRepository;
    private final UserRepository userRepository;
    private final ProjectService projectService;

    @Autowired
    public MessageServiceImpl(MessageRepository messageRepository, UserRepository userRepository, ProjectService projectService){
        this.messageRepository = messageRepository;
        this.userRepository = userRepository;
        this.projectService = projectService;
    }

    @Override
    public Message sendMessage(Long senderId, Long projectId, String content) throws Exception{
        User sender = userRepository.findById(senderId)
                .orElseThrow(()-> new Exception("User not found with id: "+ senderId));

        Chat chat = projectService.getProjectById(projectId).getChat();

        Message message = new Message();
        message.setContent(content);
        message.setSender(sender);
        message.setCreatedAt(LocalDateTime.now());
        message.setChat(chat);
        Message savedMessage = messageRepository.save(message);

        chat.getMessages().add(savedMessage);
        return savedMessage;
    }

    @Override
    public List<Message> getMessagesByProjectId(Long projectId) throws Exception {
        Chat chat = projectService.getChatByProjectId(projectId);
        return messageRepository.findByChatIdOrderByCreatedAtAsc(chat.getId());
    }



}
