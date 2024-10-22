package com.giridhari.config;


import io.jsonwebtoken.Jwts;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;

import java.time.Instant;
import java.util.Date;
import java.util.stream.Collectors;

public class JwtProvider {

    private JwtProvider() {
        throw new AssertionError("Utility class should not be instantiated.");
    }

    public static String generateToken(Authentication auth) {
        final long EXPIRATION_TIME = 86400000; // 24 hours

        return Jwts.builder()
                .issuedAt(Date.from(Instant.now()))
                .expiration(Date.from(Instant.now().plusMillis(EXPIRATION_TIME)))
                .claim("email", auth.getName())
                .claim("authorities", auth.getAuthorities().stream()
                        .map(GrantedAuthority::getAuthority)
                        .collect(Collectors.joining(",")))
                .signWith(JwtConstant.JWT_KEY)
                .compact();
    }

    public static String getEmailFromToken(String jwt) {
        if (jwt != null && jwt.startsWith("Bearer ")) {
            jwt = jwt.substring(7);
        }

        return Jwts.parser()
                .verifyWith(JwtConstant.JWT_KEY)
                .build()
                .parseSignedClaims(jwt)
                .getPayload()
                .get("email", String.class);
    }
}
