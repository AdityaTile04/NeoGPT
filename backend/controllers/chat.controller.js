import Thread from "../models/thread.model.js";

export const testController = async (req, res) => {
  try {
    const thread = new Thread({
      threadId: "xyz",
      title: "Testing new thread",
    });
    const response = await thread.save();
    res.send(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ erorr: "Failed to save in DB" });
  }
};
