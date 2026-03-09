package org.example.servicerepository.controller;

import org.example.servicerepository.model.ServiceRecord;
import org.example.servicerepository.repository.ServiceRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/services")
@CrossOrigin("*")
public class ServiceController {

    private final ServiceRepository repository;

    public ServiceController(ServiceRepository repository){
        this.repository = repository;
    }

    @PostMapping("/add")
    public ServiceRecord addService(@RequestBody ServiceRecord record){
        return repository.save(record);
    }

    @GetMapping("/all")
    public List<ServiceRecord> getAll(){
        return repository.findAll();
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id){
        repository.deleteById(id);
    }

    @GetMapping("/vehicle/{vehicleNumber}")
    public List<ServiceRecord> searchVehicle(@PathVariable String vehicleNumber){
        return repository.findByVehicleNumber(vehicleNumber);
    }

}