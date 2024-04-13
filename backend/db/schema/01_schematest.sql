INSERT INTO users (username, email, password) VALUES 
('chefjulia', 'julia@example.com', '12345678'),
('bakerbob', 'bob@example.com', '13243546'),
('cookcarla', 'carla@example.com', '11223344');


INSERT INTO recipes (title, summary, spoon_recipe_id) VALUES 
('Spaghetti Carbonara', 'A quick and easy Italian pasta dish.', 715495),
('Chicken Curry', 'A flavorful and spicy chicken curry dish.', 716426),
('Chocolate Brownie', 'Rich, fudgy, and decadent dessert.', 1096219);
-- Inserting ingredients
INSERT INTO ingredients (name, description) VALUES 
('Eggs', 'Chicken eggs, used in baking and cooking'),
('Flour', 'All-purpose flour, used for baking and cooking'),
('Sugar', 'Sweet granulated sugar, used as a sweetener in recipes');


INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity, measurements) VALUES 
(1, 1, '4', 'units'),
(2, 2, '2', 'cups'),
(3, 3, '1.5', 'cups');


INSERT INTO favorites (user_id, recipe_id) VALUES 
(1, 2),
(2, 1),
(3, 3);