-- DROP TABLE recipe_ingredients;
DROP TABLE favorites;
-- DROP TABLE ingredients;
-- DROP TABLE recipes;
DROP TABLE users;


CREATE TABLE favorites (
    favorite_id serial NOT NULL,
    user_id integer NOT NULL,
    recipe_id integer NOT NULL,
    added_date timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);

-- CREATE TABLE ingredients (
--     ingredient_id serial NOT NULL,
--     name character varying(255) NOT NULL,
--     description text
-- );

-- CREATE TABLE recipe_ingredients (
--     recipe_ingredients_id serial NOT NULL,
--     recipe_id integer NOT NULL,
--     ingredient_id integer NOT NULL,
--     quantity character varying(50),
--     measurements character varying(50)
-- );

-- CREATE TABLE recipes (
--     recipe_id integer NOT NULL,
--     title character varying(255) NOT NULL,
--     summary text NOT NULL,
--     spoon_recipe_id integer NOT NULL
-- );


CREATE TABLE users (
    user_id serial NOT NULL,
    username character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password text NOT NULL
);


ALTER TABLE ONLY favorites
    ADD CONSTRAINT favorites_pkey PRIMARY KEY (favorite_id);


--
-- Name: ingredients ingredients_pkey; Type: CONSTRAINT; Schema: public; Owner: labber
--

-- ALTER TABLE ONLY ingredients
--     ADD CONSTRAINT ingredients_pkey PRIMARY KEY (ingredient_id);


--
-- Name: recipe_ingredients recipe_ingredients_pkey; Type: CONSTRAINT; Schema: public; Owner: labber
--

-- ALTER TABLE ONLY recipe_ingredients
--     ADD CONSTRAINT recipe_ingredients_pkey PRIMARY KEY (recipe_ingredients_id);


--
-- Name: recipes recipes_pkey; Type: CONSTRAINT; Schema: public; Owner: labber
--

-- ALTER TABLE ONLY recipes
--     ADD CONSTRAINT recipes_pkey PRIMARY KEY (recipe_id);


-- --
-- -- Name: recipes recipes_spoon_recipe_id_key; Type: CONSTRAINT; Schema: public; Owner: labber
-- --

-- ALTER TABLE ONLY recipes
--     ADD CONSTRAINT recipes_spoon_recipe_id_key UNIQUE (spoon_recipe_id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- Name: favorites favorites_recipe_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: labber
--
--ALTER TABLE ONLY favorites
 --   ADD CONSTRAINT favorites_recipe_id_fkey FOREIGN KEY (recipe_id) REFERENCES recipes(recipe_id);


--
-- Name: favorites favorites_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: labber
--

ALTER TABLE ONLY favorites
    ADD CONSTRAINT favorites_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(user_id);


--
-- Name: recipe_ingredients recipe_ingredients_ingredient_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: labber
--

-- ALTER TABLE ONLY recipe_ingredients
--     ADD CONSTRAINT recipe_ingredients_ingredient_id_fkey FOREIGN KEY (ingredient_id) REFERENCES ingredients(ingredient_id);


-- ALTER TABLE ONLY recipe_ingredients
--     ADD CONSTRAINT recipe_ingredients_recipe_id_fkey FOREIGN KEY (recipe_id) REFERENCES recipes(recipe_id);


--
-- PostgreSQL database dump complete
--

