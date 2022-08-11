SELECT job_title, ROUND((min_salary + max_salary) / 2, 2) AS `media` FROM hr.jobs
GROUP BY job_title
ORDER BY `media` DESC;