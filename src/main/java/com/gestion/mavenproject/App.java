package com.gestion.mavenproject;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence; 

import org.apache.openjpa.*;
import org.apache.openjpa.conf.OpenJPAConfiguration;

import com.mysql.jdbc.Driver;

import model.*;

/**
 * Hello world!
 *
 */
public class App 
{
	private static final String PERSISTENCE_UNIT_NAME = "infoevau";
	private static final EntityManagerFactory ENTITY_MANAGER_FACTORY = Persistence
			.createEntityManagerFactory(PERSISTENCE_UNIT_NAME); 
	
    public static void main( String[] args ) throws Exception
    {
    	final EntityManager entityManager = ENTITY_MANAGER_FACTORY.createEntityManager();
		final Sede person = entityManager.find(Sede.class, "Nº 01 Facultad de Medicina");
		System.out.println(person);
		entityManager.close();
		ENTITY_MANAGER_FACTORY.close();
    }
}
