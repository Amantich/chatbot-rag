package com.example.chatbotrag2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.vaadin.flow.theme.Theme;
import com.vaadin.flow.component.page.AppShellConfigurator;

@SpringBootApplication
public class ChatbotRag2Application implements AppShellConfigurator {

    public static void main(String[] args) {
        SpringApplication.run(ChatbotRag2Application.class, args);
    }
}
