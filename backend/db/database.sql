CREATE DATABASE IF NOT EXISTS task_manager;

USE task_manager;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    google_id VARCHAR(100),
    github_id VARCHAR(100)
);
CREATE TABLE tasks (
    task_id INT AUTO_INCREMENT PRIMARY KEY,
    description TEXT NOT NULL,
    deadline DATE NOT NULL,
    priority INT NOT NULL,
    assigned_to INT,
    completed BOOLEAN DEFAULT FALSE,
    completed_by INT,
    FOREIGN KEY (assigned_to) REFERENCES users(user_id),
    FOREIGN KEY (completed_by) REFERENCES users(user_id)
);
CREATE TABLE divisions (
    division_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE points (
    point_id INT AUTO_INCREMENT PRIMARY KEY,
    task_id INT,
    user_id INT,
    points INT,
    FOREIGN KEY (task_id) REFERENCES tasks(task_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

