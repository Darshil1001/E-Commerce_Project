package com.example.models;

public class EmpModel {
	private String empName;
	private String empEmail;
	public String getEmpName() {
		return empName;
	}
	public void setEmpName(String empName) {
		this.empName = empName;
	}
	public String getEmpEmail() {
		return empEmail;
	}
	public void setEmpEmail(String empEmail) {
		this.empEmail = empEmail;
	}
	@Override
	public String toString() {
		return "EmpModel [empName=" + empName + ", empEmail=" + empEmail + "]";
	}
	
}
