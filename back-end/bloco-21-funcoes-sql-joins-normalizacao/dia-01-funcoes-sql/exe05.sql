SELECT 
	ROUND(MAX(salary), 2) AS `maior_salario`, 
	ROUND(MIN(salary), 2) AS `menor_salario`, 
	ROUND(AVG(salary), 2) AS `media`,
    ROUND(SUM(salary), 2) AS `total`
FROM hr.employees;