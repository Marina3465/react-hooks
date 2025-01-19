import { FunctionComponent, useMemo, useState } from "react";

interface MemoProps {}
type People = {
  id: number;
  name: string;
  age: number;
};
const people: People[] = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
  { id: 4, name: "David", age: 40 },
  { id: 5, name: "Eva", age: 45 },
];
const Memo: FunctionComponent<MemoProps> = () => {
  const [ageFilter, setAgeFilter] = useState(30);

  const filteredPeople = useMemo(() => {
    console.log("Filtering people...");
    return people.filter((person) => person.age >= ageFilter);
  }, [ageFilter]);

  return (
    <div>
      <h1>People filtered by age = {ageFilter}</h1>
      <ul>
        {filteredPeople.map((person) => (
          <li key={person.id}>
            {person.name} ({person.age})
          </li>
        ))}
      </ul>
      <input
        type="number"
        value={ageFilter}
        onChange={(e) => setAgeFilter(Number(e.target.value))}
      />
    </div>
  );
};

export default Memo;
