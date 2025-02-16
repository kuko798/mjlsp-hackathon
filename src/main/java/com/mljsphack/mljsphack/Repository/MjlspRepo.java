package com.Example.demo.Repository;

import com.Example.mljsphack.mljsphack.Entity.Mjslp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface MjlspRepo extends JpaRepository<Mjlsp, Integer> {


    //Search up Spring JPA Naming Conventions for more details
    Mjlsp findByName(String name);


    //Can write really complex queries with native MySQL like so - search up Spring custom queries for more
    //@Query(nativeQuery = true, value = "Complex MySQL Query Here")
    //Dog findByNameAndBreedIsLike(String name, String breed);




}
