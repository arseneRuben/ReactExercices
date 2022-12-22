DROP TABLE IF EXISTS nodepg;

CREATE TABLE nodepg (
  id            SERIAL PRIMARY KEY,
  stringField	VARCHAR(100) NOT NULL,
  dateNowField	TIMESTAMPTZ DEFAULT Now(),
  numberField	integer NOT NULL,
  booleanField	boolean NOT NULL
);

INSERT INTO nodepg (stringField, numberField, booleanField) VALUES ('chaîne de caractères 1', 666, true);
INSERT INTO nodepg (stringField, numberField, booleanField) VALUES ('chaîne de caractères 2', 667, false);
INSERT INTO nodepg (stringField, numberField, booleanField) VALUES ('chaîne de caractères 3', 668, false);