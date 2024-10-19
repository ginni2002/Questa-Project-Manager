package com.giridhari.controller;

import com.giridhari.modal.PlanType;
import com.giridhari.modal.Subscription;
import com.giridhari.modal.User;
import com.giridhari.service.SubscriptionService;
import com.giridhari.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/subscriptions")
public class SubscriptionController {

    private final SubscriptionService subscriptionService;
    private final UserService userService;

    @Autowired
    public SubscriptionController(SubscriptionService subscriptionService, UserService userService){
        this.subscriptionService = subscriptionService;
        this.userService = userService;
    }

    @GetMapping("/user")
    public ResponseEntity<Subscription> getUserSubscription(
            @RequestHeader("Authorization") String jwt
    ) throws Exception{

        User user = userService.findUserProfileByJwt(jwt);

        Subscription subscription = subscriptionService.getUserSubscription(user.getId());

        return new ResponseEntity<>(subscription, HttpStatus.OK);
    }

    @PatchMapping("/upgrade")
    public ResponseEntity<Subscription> upgradeSubscription(
            @RequestHeader("Authorization") String jwt,
            @RequestParam PlanType planType
            ) throws Exception{

        User user = userService.findUserProfileByJwt(jwt);

        Subscription subscription = subscriptionService.upgradeSubscription(user.getId(),planType);

        return new ResponseEntity<>(subscription, HttpStatus.OK);
    }





}
