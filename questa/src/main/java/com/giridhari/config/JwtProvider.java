package com.giridhari.config;


import io.jsonwebtoken.Jwts;
import org.springframework.security.core.Authentication;
import javax.crypto.SecretKey;
import java.time.Instant;
import java.util.Date;

public class JwtProvider {

    static SecretKey key = Jwts.SIG.HS256.key().build();

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

       return Jwts.parser()
               .verifyWith(key)
               .build()
               .parseSignedClaims(jwt)
               .getPayload()
               .get("email",String.class);
}

}
