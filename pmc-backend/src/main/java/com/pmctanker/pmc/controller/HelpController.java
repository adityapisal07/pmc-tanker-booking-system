package com.pmctanker.pmc.controller;

import com.pmctanker.pmc.model.HelpFeedback;
import com.pmctanker.pmc.repository.HelpFeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/help")
@CrossOrigin(origins = "http://localhost:3000") // frontend origin
public class HelpController {

    @Autowired
    private HelpFeedbackRepository helpRepo;

    @PostMapping("/feedback")
    public String saveFeedback(@RequestBody HelpFeedback feedback) {
        helpRepo.save(feedback);
        return "Feedback submitted successfully!";
    }
}
