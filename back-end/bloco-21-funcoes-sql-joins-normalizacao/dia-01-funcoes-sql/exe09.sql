SELECT job_id, ROUND((min_salary + max_salary) / 2, 2) AS `media` FROM hr.jobs
GROUP BY job_id
HAVING NOT job_id = 'IT_PROG'
ORDER BY `media` DESC;