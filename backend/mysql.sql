CREATE TABLE IF NOT EXISTS leaguer_meta(
          id VARCHAR(255) PRIMARY KEY,
          created_at DATE NOT NULL,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) UNIQUE NOT NULL,
          phase VARCHAR(255) NOT NULL default "Introdução",
          tecnologies VARCHAR(255) NOT NULL,
          languages VARCHAR(255),
          id_mentor VARCHAR(255),
          id_manager VARCHAR(255),
          id_admin VARCHAR(255),
          id_class VARCHAR(255) NOT NULL,
          FOREIGN KEY (id_class) REFERENCES class_meta(id)
       );

          CREATE TABLE IF NOT EXISTS responsible_meta(
          id VARCHAR(255) PRIMARY KEY ,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) UNIQUE NOT NULL,
          password VARCHAR(255) NOT NULL,
          role VARCHAR(255) DEFAULT "GESTOR",
          team VARCHAR(255),
          FOREIGN KEY (team) REFERENCES class_meta(id)
       );

       CREATE TABLE IF NOT EXISTS create_feedbacks_meta(
            id VARCHAR(255) PRIMARY KEY,
            id_leaguer VARCHAR(255) UNIQUE NOT NULL,
            FOREIGN KEY (id_leaguer) REFERENCES leaguer_meta(id),
            id_creator VARCHAR(255) NOT NULL ,
            id_evaluator  VARCHAR(255) NOT NULL,
            created_at DATE NOT NULL ,
            performance float NOT NULL,
            quality_on_delivery float NOT NULL,
            commitment float NOT NULL ,
            team_work float NOT NULL,
            participation float NOT NULL,
            punctuality  float NOT NULL,
            comment TEXT
       );
CREATE TABLE IF NOT EXISTS feedbacks_compiled_meta(
            id VARCHAR(255) PRIMARY KEY,
            id_leaguer VARCHAR(255) NOT NULL,
            FOREIGN KEY (id_leaguer) REFERENCES leaguer_meta(id),
            performance float NOT NULL,
            quality_on_delivery float NOT NULL,
            commitment float NOT NULL,
            team_work float NOT NULL,
            participation float NOT NULL,
            punctuality  float NOT NULL,
            comment TEXT

       );
          CREATE TABLE IF NOT EXISTS response_feedback_meta(
          id_evaluator  VARCHAR(255) ,
          FOREIGN KEY (id_evaluator ) REFERENCES create_feedbacks_meta(id),
          response_performance  float NOT NULL,
          response_quality_on_delivery float NOT NULL,
          response_commitment float NOT NULL,
          response_team_work float NOT NULL,
          response_participation float NOT NULL,
          response_punctuality float NOT NULL,
          char_highlights text NOT NULL,
          response_1 text,
          response_2 text,
          question_1 text,
          question_2 text,
          comment text
       );

      CREATE TABLE IF NOT EXISTS class_meta(
          id VARCHAR(255) PRIMARY KEY,
          team_name VARCHAR(255) NOT NULL UNIQUE
       );
