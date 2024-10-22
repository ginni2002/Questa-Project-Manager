package com.giridhari.config;

import io.jsonwebtoken.Jwts;

import javax.crypto.SecretKey;

public class JwtConstant {
    public static final String SECRET_KEY = "Giridhari@123";
    public static final String JWT_HEADER = "Authorization";
    public static final SecretKey JWT_KEY = Jwts.SIG.HS256.key().build();
}
