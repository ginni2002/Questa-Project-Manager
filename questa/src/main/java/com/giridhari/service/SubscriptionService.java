package com.giridhari.service;

import com.giridhari.modal.PlanType;
import com.giridhari.modal.Subscription;
import com.giridhari.modal.User;

public interface SubscriptionService {

Subscription createSubscription(User user);
Subscription getUserSubscription(Long userId) throws Exception;
Subscription upgradeSubscription(Long userId, PlanType planType);

boolean isValid(Subscription subscription);

}
