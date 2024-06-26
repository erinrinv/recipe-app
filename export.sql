--
-- PostgreSQL database dump
--

-- Dumped from database version 10.14 (Ubuntu 10.14-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.14 (Ubuntu 10.14-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: favorites; Type: TABLE; Schema: public; Owner: labber
--

CREATE TABLE public.favorites (
    favorite_id integer NOT NULL,
    user_id integer NOT NULL,
    recipe_id integer NOT NULL,
    added_date timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.favorites OWNER TO labber;

--
-- Name: favorites_favorite_id_seq; Type: SEQUENCE; Schema: public; Owner: labber
--

CREATE SEQUENCE public.favorites_favorite_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.favorites_favorite_id_seq OWNER TO labber;

--
-- Name: favorites_favorite_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: labber
--

ALTER SEQUENCE public.favorites_favorite_id_seq OWNED BY public.favorites.favorite_id;


--
-- Name: ingredients; Type: TABLE; Schema: public; Owner: labber
--

CREATE TABLE public.ingredients (
    ingredient_id integer NOT NULL,
    name character varying(255) NOT NULL,
    description text
);


ALTER TABLE public.ingredients OWNER TO labber;

--
-- Name: ingredients_ingredient_id_seq; Type: SEQUENCE; Schema: public; Owner: labber
--

CREATE SEQUENCE public.ingredients_ingredient_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.ingredients_ingredient_id_seq OWNER TO labber;

--
-- Name: ingredients_ingredient_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: labber
--

ALTER SEQUENCE public.ingredients_ingredient_id_seq OWNED BY public.ingredients.ingredient_id;


--
-- Name: recipe_ingredients; Type: TABLE; Schema: public; Owner: labber
--

CREATE TABLE public.recipe_ingredients (
    recipe_ingredients_id integer NOT NULL,
    recipe_id integer NOT NULL,
    ingredient_id integer NOT NULL,
    quantity character varying(50),
    measurements character varying(50)
);


ALTER TABLE public.recipe_ingredients OWNER TO labber;

--
-- Name: recipe_ingredients_recipe_ingredients_id_seq; Type: SEQUENCE; Schema: public; Owner: labber
--

CREATE SEQUENCE public.recipe_ingredients_recipe_ingredients_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.recipe_ingredients_recipe_ingredients_id_seq OWNER TO labber;

--
-- Name: recipe_ingredients_recipe_ingredients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: labber
--

ALTER SEQUENCE public.recipe_ingredients_recipe_ingredients_id_seq OWNED BY public.recipe_ingredients.recipe_ingredients_id;


--
-- Name: recipes; Type: TABLE; Schema: public; Owner: labber
--

CREATE TABLE public.recipes (
    recipe_id integer NOT NULL,
    title character varying(255) NOT NULL,
    summary text NOT NULL,
    spoon_recipe_id integer NOT NULL
);


ALTER TABLE public.recipes OWNER TO labber;

--
-- Name: recipes_recipe_id_seq; Type: SEQUENCE; Schema: public; Owner: labber
--

CREATE SEQUENCE public.recipes_recipe_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.recipes_recipe_id_seq OWNER TO labber;

--
-- Name: recipes_recipe_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: labber
--

ALTER SEQUENCE public.recipes_recipe_id_seq OWNED BY public.recipes.recipe_id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    user_id integer NOT NULL,
    username character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password text NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_user_id_seq OWNER TO postgres;

--
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;


--
-- Name: favorites favorite_id; Type: DEFAULT; Schema: public; Owner: labber
--

ALTER TABLE ONLY public.favorites ALTER COLUMN favorite_id SET DEFAULT nextval('public.favorites_favorite_id_seq'::regclass);


--
-- Name: ingredients ingredient_id; Type: DEFAULT; Schema: public; Owner: labber
--

ALTER TABLE ONLY public.ingredients ALTER COLUMN ingredient_id SET DEFAULT nextval('public.ingredients_ingredient_id_seq'::regclass);


--
-- Name: recipe_ingredients recipe_ingredients_id; Type: DEFAULT; Schema: public; Owner: labber
--

ALTER TABLE ONLY public.recipe_ingredients ALTER COLUMN recipe_ingredients_id SET DEFAULT nextval('public.recipe_ingredients_recipe_ingredients_id_seq'::regclass);


--
-- Name: recipes recipe_id; Type: DEFAULT; Schema: public; Owner: labber
--

ALTER TABLE ONLY public.recipes ALTER COLUMN recipe_id SET DEFAULT nextval('public.recipes_recipe_id_seq'::regclass);


--
-- Name: users user_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);


--
-- Data for Name: favorites; Type: TABLE DATA; Schema: public; Owner: labber
--

COPY public.favorites (favorite_id, user_id, recipe_id, added_date) FROM stdin;
\.


--
-- Data for Name: ingredients; Type: TABLE DATA; Schema: public; Owner: labber
--

COPY public.ingredients (ingredient_id, name, description) FROM stdin;
\.


--
-- Data for Name: recipe_ingredients; Type: TABLE DATA; Schema: public; Owner: labber
--

COPY public.recipe_ingredients (recipe_ingredients_id, recipe_id, ingredient_id, quantity, measurements) FROM stdin;
\.


--
-- Data for Name: recipes; Type: TABLE DATA; Schema: public; Owner: labber
--

COPY public.recipes (recipe_id, title, summary, spoon_recipe_id) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (user_id, username, email, password) FROM stdin;
1	ebenak	evan@gmail.com	$2b$10$xzf9hvZ3aCfJVjhNtnRwue4YCLD1Mf9w/JwiOcxmv5lJUNNGiLkQO
3	benak	ebenak@gmail.com	$2b$10$b8oNhQlhJiCkRGQL27irUOpGd97JtWtzA6qsnxHCMwd/igBf6YKHa
5	john	john@gmail.com	$2b$10$2xSMwvG6.iplOo8.P1pu6.oGY7fjuZ2Lb5d4vLKUgbehProUxxB/G
6	ghost	ben@gmail.com	$2b$10$3Ea41XmAvLq/L0KNODwV8.K4nPOpezmRg63szFwwv7IvdVs9rdQEa
7	jello	jello@gmail.com	$2b$10$7xQz5NQFhyCyDXbWHu4pJeex0xN6I7xUWSJ.fbssds4CixLerMLRi
8	George	george@gmail.com	$2b$10$TlBQPWp3zD/Ygtlh4yMkROJfD1FKdMoaEwrdPP/Z4LqQt3aGhbeTe
\.


--
-- Name: favorites_favorite_id_seq; Type: SEQUENCE SET; Schema: public; Owner: labber
--

SELECT pg_catalog.setval('public.favorites_favorite_id_seq', 5, true);


--
-- Name: ingredients_ingredient_id_seq; Type: SEQUENCE SET; Schema: public; Owner: labber
--

SELECT pg_catalog.setval('public.ingredients_ingredient_id_seq', 1, false);


--
-- Name: recipe_ingredients_recipe_ingredients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: labber
--

SELECT pg_catalog.setval('public.recipe_ingredients_recipe_ingredients_id_seq', 1, false);


--
-- Name: recipes_recipe_id_seq; Type: SEQUENCE SET; Schema: public; Owner: labber
--

SELECT pg_catalog.setval('public.recipes_recipe_id_seq', 1, false);


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_user_id_seq', 8, true);


--
-- Name: favorites favorites_pkey; Type: CONSTRAINT; Schema: public; Owner: labber
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_pkey PRIMARY KEY (favorite_id);


--
-- Name: ingredients ingredients_pkey; Type: CONSTRAINT; Schema: public; Owner: labber
--

ALTER TABLE ONLY public.ingredients
    ADD CONSTRAINT ingredients_pkey PRIMARY KEY (ingredient_id);


--
-- Name: recipe_ingredients recipe_ingredients_pkey; Type: CONSTRAINT; Schema: public; Owner: labber
--

ALTER TABLE ONLY public.recipe_ingredients
    ADD CONSTRAINT recipe_ingredients_pkey PRIMARY KEY (recipe_ingredients_id);


--
-- Name: recipes recipes_pkey; Type: CONSTRAINT; Schema: public; Owner: labber
--

ALTER TABLE ONLY public.recipes
    ADD CONSTRAINT recipes_pkey PRIMARY KEY (recipe_id);


--
-- Name: recipes recipes_spoon_recipe_id_key; Type: CONSTRAINT; Schema: public; Owner: labber
--

ALTER TABLE ONLY public.recipes
    ADD CONSTRAINT recipes_spoon_recipe_id_key UNIQUE (spoon_recipe_id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- Name: favorites favorites_recipe_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: labber
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_recipe_id_fkey FOREIGN KEY (recipe_id) REFERENCES public.recipes(recipe_id);


--
-- Name: favorites favorites_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: labber
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- Name: recipe_ingredients recipe_ingredients_ingredient_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: labber
--

ALTER TABLE ONLY public.recipe_ingredients
    ADD CONSTRAINT recipe_ingredients_ingredient_id_fkey FOREIGN KEY (ingredient_id) REFERENCES public.ingredients(ingredient_id);


--
-- Name: recipe_ingredients recipe_ingredients_recipe_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: labber
--

ALTER TABLE ONLY public.recipe_ingredients
    ADD CONSTRAINT recipe_ingredients_recipe_id_fkey FOREIGN KEY (recipe_id) REFERENCES public.recipes(recipe_id);


--
-- PostgreSQL database dump complete
--

