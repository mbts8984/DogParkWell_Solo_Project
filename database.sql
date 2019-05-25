
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- NEED TO UPDATE HERE

CREATE TABLE "dog_park"
(
    "id" SERIAL PRIMARY KEY,
    "dog_park" VARCHAR (150),
    "park_image" VARCHAR (255)
);

CREATE TABLE "user_data"
(
    "id" SERIAL PRIMARY KEY,
    "human_name" VARCHAR (150) NOT NULL,
    "email" VARCHAR (255) NOT NULL,
    "phone" INT NOT NULL,
    "preferred_contact_method" VARCHAR (50),
    "home_dog_park_id" BIGINT REFERENCES "dog_park",
    "username" VARCHAR (180) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "admin" BOOLEAN DEFAULT 'false'
);

CREATE TABLE "dog_data"
(
    "id" SERIAL PRIMARY KEY,
    "dog_name" VARCHAR(125),
    "breed" VARCHAR(175),
    "age" INT,
    "gender" VARCHAR (25),
    "color" VARCHAR (100),
    "username_id" INT REFERENCES "user_data"
);


CREATE TABLE "playdates"
(
    "id" SERIAL PRIMARY KEY,
    "date" DATE NOT NULL,
    "time" TIME NOT NULL,
    "dog_park_id" INT REFERENCES "dog_park" NOT NULL,
    "notes" VARCHAR (400),
    "username_id" INT REFERENCES "user_data"
);

CREATE TABLE "network"
(
    "id" SERIAL PRIMARY KEY,
    "username_id" INT REFERENCES "user_data",
    "friend_id" INT REFERENCES "user_data"
);

INSERT INTO "dog_park"
    (dog_park)
VALUES
    ('Alimagnet Dog Park'),
    ('Alpine Dog Park'),
    ('Andys Bark Park'),
    ('Aquatore Dog Park'),
    ('Bald Eagle-Otter Lakes Regional Dog Park'),
    ('Battle Creek Dog Park'),
    ('Bloomington Off-Leash Rec Area'),
    ('Brookdale Dog Park'),
    ('Bunker Hills Regional Dog Park'),
    ('Buster Park Dog Park'),
    ('Cedar Knoll Park'),
    ('Savage Dog Park'),
    ('Cleary Lake Dog Park'),
    ('Crystal Dog Park'),
    ('Elm Creek Dog Park'),
    ('Flying Cloud Dog Park'),
    ('Gatewary Play Area'),
    ('Franklin Terrace Off-Leash Rec Area'),
    ('High Bridge Dog Park'),
    ('Kaposia Landing Dog Park'),
    ('Lake Minnewashta Dog Park'),
    ('Lake Of The Isles Dog Park'),
    ('Lauderdale Dog Park'),
    ('Loring Park Rec Area'),
    ('Lowertown Dog Park - St. Paul'),
    ('Lyndale Farmstead Dog Park'),
    ('Meeker Island Dog Park'),
    ('Minneapolis Airport Dog Park'),
    ('Minnehaha Dog Park'),
    ('North Loop Play Area'),
    ('Oakdale Dog Park'),
    ('Plymouth Dog Park'),
    ('Rice Creek North Trail Corridor Area'),
    ('Sochacki Dog Park'),
    ('Southbridge Community Park'),
    ('St. Anthony Parkway Rec Area'),
    ('Staring Lake Park'),
    ('Stillwater Dog Park'),
    ('Thresher Fields Park'),
    ('Van Valkenburg Off-Leash Area'),
    ('Victory Prairie Rec Area'),
    ('WAG Farms Dog Park'),
    ('White Bear Lake Dog Beach'),
    ('Woodbury Dog Park'),
    ('Woodview Open Space');






