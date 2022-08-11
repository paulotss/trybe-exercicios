SELECT department_id, ROUND(AVG(salary), 2) AS `salary`, COUNT(*) AS `employees` FROM hr.employees
GROUP BY department_id
HAVING `employees` >= 10;
