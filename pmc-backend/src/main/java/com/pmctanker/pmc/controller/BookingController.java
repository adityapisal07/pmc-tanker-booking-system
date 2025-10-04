package com.pmctanker.pmc.controller;

import com.pmctanker.pmc.model.Booking;
import com.pmctanker.pmc.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = "http://localhost:3000")
public class BookingController {

    @Autowired
    private BookingRepository bookingRepository;

    // ✅ Create booking
    @PostMapping
    public ResponseEntity<Booking> createBooking(@RequestBody Booking booking) {
        Booking savedBooking = bookingRepository.save(booking);
        return ResponseEntity.ok(savedBooking);
    }

    // ✅ Get all bookings (optional, for history page later)
    @GetMapping
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }
}
