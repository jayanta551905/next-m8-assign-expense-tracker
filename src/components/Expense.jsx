import { useState } from "react";

const Expense = () => {
  const [expense, setExpense] = useState("");
  const [description, setDescription] = useState("");
  const [expenseList, setExpenseList] = useState([]);

  const handleAddIncome = () => {
    const newEntry = {
      id: Date.now(),
      income: parseFloat(expense),
      description,
    };

    setExpenseList((prevList) => [...prevList, newEntry]);

    setExpense("");
    setDescription("");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="income"
        >
          Enter Expense value:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="income"
          type="number"
          placeholder="Enter income..."
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="description"
        >
          Enter Expense description:
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          rows="4"
          placeholder="Enter description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleAddIncome}
      >
        Add
      </button>

      {expenseList.length > 0 && (
        <table className="table-auto w-full mt-4">
          <thead>
            <tr>
              <th className="px-4 py-2">Income</th>
              <th className="px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {expenseList.map((entry) => (
              <tr key={entry.id}>
                <td className="border px-4 py-2">{entry.income}</td>
                <td className="border px-4 py-2">{entry.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Expense;
