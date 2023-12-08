package Student.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Student.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Студент
 */
@Entity(name = "IISStudentСтудент")
@Table(schema = "public", name = "Студент")
public class Student {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Фамилия")
    private String фамилия;

    @Column(name = "СреднийБалл")
    private Double среднийбалл;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Gruppa")
    @Convert("Gruppa")
    @Column(name = "Группа", length = 16, unique = true, nullable = false)
    private UUID _gruppaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Gruppa", insertable = false, updatable = false)
    private Gruppa gruppa;


    public Student() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getФамилия() {
      return фамилия;
    }

    public void setФамилия(String фамилия) {
      this.фамилия = фамилия;
    }

    public Double getСреднийБалл() {
      return среднийбалл;
    }

    public void setСреднийБалл(Double среднийбалл) {
      this.среднийбалл = среднийбалл;
    }


}