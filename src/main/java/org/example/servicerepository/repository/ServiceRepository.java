package org.example.servicerepository.repository;

import org.example.servicerepository.model.ServiceRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ServiceRepository extends JpaRepository<ServiceRecord, Long> {

    List<ServiceRecord> findByVehicleNumber(String vehicleNumber);

    List<ServiceRecord> findByServiceStatus(String serviceStatus);

}