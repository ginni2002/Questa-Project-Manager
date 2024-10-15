package com.giridhari.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.Authentication;
import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.time.Instant;
import java.util.Date;

public class JwtProvider {

    static SecretKey key = Keys.hmacShaKeyFor(JwtConstant.SECRET_KEY.getBytes(StandardCharsets.UTF_8));

    private JwtProvider(){
        throw new AssertionError("Utility class that has everything static should not be instantiated.");
    }

public static String generateToken(Authentication auth){

    final long EXPIRATION_TIME = 86400000;

    return Jwts.builder()
            .issuedAt(Date.from(Instant.now()))
            .expiration(Date.from(Instant.now().plusMillis(EXPIRATION_TIME)))
            .claim("email", auth.getName())
            .signWith(key)
            .compact();
}

public static String getEmailFromToken(String jwt){

        Jws<Claims> jws = Jwts.parser()
            .verifyWith(key)
            .build()
            .parseSignedClaims(jwt);

    Claims claims = jws.getPayload();

    return String.valueOf(claims.get("email"));
}

}
