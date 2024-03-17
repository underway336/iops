export default function status(values, res) {
  const data = {
    status: 200,
    values,
  };
  res.json(data);
  res.end();
}
