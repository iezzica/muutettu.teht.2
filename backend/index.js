import cors from "cors";

const app = json();
app.use(cors());

app.get("/getData/car", (req, res) => {
  res.send({ id: 1, name: "auto", othername: "car" });
});

app.get("/getData/house", (req, res) => {
  res.send({ id: 2, name: "talo", othername: "house" });
});

app.listen(3333, () => {
  console.log("Server running on port 3333");
});
