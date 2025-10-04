package com.pmctanker.pmc.repository;

import com.pmctanker.pmc.model.HelpFeedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HelpFeedbackRepository extends JpaRepository<HelpFeedback, Long> {
}
