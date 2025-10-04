package com.pmctanker.pmc.model;

import jakarta.persistence.*;

@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String phone;
    private String area;
    private String address;
    private String tankerType;
    private String tankerSize;

    // ✅ Default constructor
    public Booking() {}

    // ✅ Constructor with fields
    public Booking(String name, String phone, String area, String address, String tankerType, String tankerSize) {
        this.name = name;
        this.phone = phone;
        this.area = area;
        this.address = address;
        this.tankerType = tankerType;
        this.tankerSize = tankerSize;
    }

    // ✅ Getters & setters
    public Long getId() { return id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public String getArea() { return area; }
    public void setArea(String area) { this.area = area; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    public String getTankerType() { return tankerType; }
    public void setTankerType(String tankerType) { this.tankerType = tankerType; }

    public String getTankerSize() { return tankerSize; }
    public void setTankerSize(String tankerSize) { this.tankerSize = tankerSize; }
}
