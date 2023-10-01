--
-- PostgreSQL database dump
--

-- Dumped from database version 15.4 (Ubuntu 15.4-2.pgdg22.04+1)
-- Dumped by pg_dump version 15.4 (Ubuntu 15.4-2.pgdg22.04+1)

-- Started on 2023-10-01 20:10:43 MSK

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
-- TOC entry 5 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 217 (class 1259 OID 16401)
-- Name: todo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.todo (
    id integer NOT NULL,
    status character varying(100) NOT NULL,
    title character varying(100) NOT NULL
);


ALTER TABLE public.todo OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16400)
-- Name: todo_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.todo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.todo_id_seq OWNER TO postgres;

--
-- TOC entry 3381 (class 0 OID 0)
-- Dependencies: 216
-- Name: todo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.todo_id_seq OWNED BY public.todo.id;


--
-- TOC entry 214 (class 1259 OID 16391)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    phone character varying(255),
    email character varying(255),
    age integer
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16396)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- TOC entry 3382 (class 0 OID 0)
-- Dependencies: 215
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 3224 (class 2604 OID 16404)
-- Name: todo id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.todo ALTER COLUMN id SET DEFAULT nextval('public.todo_id_seq'::regclass);


--
-- TOC entry 3223 (class 2604 OID 16397)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 3374 (class 0 OID 16401)
-- Dependencies: 217
-- Data for Name: todo; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.todo VALUES (2, '[В работе]', 'rez');


--
-- TOC entry 3371 (class 0 OID 16391)
-- Dependencies: 214
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.users VALUES (1, 'alex', '89000000000', 'alex@alex.ru', 30);
INSERT INTO public.users VALUES (2, 'vova', '89000000000', 'vova@vova.ru', 30);
INSERT INTO public.users VALUES (3, 'dima', '89000000000', 'dima@dima.ru', 40);
INSERT INTO public.users VALUES (4, 'lena', '89000000000', 'lena@lena.ru', 25);
INSERT INTO public.users VALUES (5, 'sergey', '89000000000', 'sergey@sergey.ru', 18);
INSERT INTO public.users VALUES (7, 'Vovan2', '89002225544', 'vovan@vovan.ru', 55);


--
-- TOC entry 3383 (class 0 OID 0)
-- Dependencies: 216
-- Name: todo_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.todo_id_seq', 2, true);


--
-- TOC entry 3384 (class 0 OID 0)
-- Dependencies: 215
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 7, true);


--
-- TOC entry 3228 (class 2606 OID 16406)
-- Name: todo todo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.todo
    ADD CONSTRAINT todo_pkey PRIMARY KEY (id);


--
-- TOC entry 3226 (class 2606 OID 16399)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 3380 (class 0 OID 0)
-- Dependencies: 5
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2023-10-01 20:10:44 MSK

--
-- PostgreSQL database dump complete
--

