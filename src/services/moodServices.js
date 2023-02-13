import pool from "../lib/postgres.js";

class MoodServices {
  constructor() {
    this.pool = pool;
    this.pool.on("error", (error) => {
      console.error(error);
    });
  }

  async store(data) {
    const queryMood = "INSERT INTO moods (username, value) VALUES ($1, $2)";
    const paramsMood = [data.user, data.mood];

    const response = await this.pool.query(queryMood, paramsMood);
    if (!response.rowCount) {
      throw new Error("Can't save mood");
    }

    const queryQuestions = `INSERT INTO questions (
			username, 
			value1,
			comment1,
			value2,
			comment2,
			value3,
			comment3,
			value4,
			comment4,
			value5,
			comment5,
			additional_comment
		) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`;
    const paramsQuestions = [
      data.user,
      data.question1.value,
      data.question1.comment,
      data.question2.value,
      data.question2.comment,
      data.question3.value,
      data.question3.comment,
      data.question4.value,
      data.question4.comment,
      data.question5.value,
      data.question6.comment,
      data.additional_comment,
    ];

    const response2 = await this.pool.query(queryQuestions, paramsQuestions);
    if (!response2.rowCount) {
      throw new Error("Cant save questions");
    }

    return true;
  }
}

export default MoodServices;
