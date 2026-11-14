import { useMemo } from "react";
import { highlight } from "./highlight.jsx";

const REACT_SNIPPET = `function FundTransfer({ account }) {
  const [amount, setAmount] = useState(0);

  const transfer = async () => {
    const res = await fetch("/api/transfers", {
      method: "POST",
      body: JSON.stringify({ account, amount }),
    });
    if (!res.ok) throw new Error("Transfer failed");
  };

  return <button onClick={transfer}>Transfer</button>;
}`;

const JAVA_SNIPPET = `@RestController
@RequestMapping("/api/transfers")
public class TransferController {

    private final TransferService service;

    @PostMapping
    public ResponseEntity<Transfer> create(@RequestBody TransferRequest req) {
        Transfer saved = service.create(req);
        return ResponseEntity.ok(saved);
    }
}`;

const SQL_SNIPPET = `-- approved transfers by bank
SELECT b.bank_name, SUM(t.amount) AS total
FROM transfers t
JOIN bank_accounts b ON b.id = t.account_id
WHERE t.status = 'APPROVED'
GROUP BY b.bank_name;`;

// Faint code that sits behind the whole page, like an editor in the distance.
export default function CodeBackdrop() {
  const react = useMemo(() => highlight(REACT_SNIPPET), []);
  const java = useMemo(() => highlight(JAVA_SNIPPET), []);
  const sql = useMemo(() => highlight(SQL_SNIPPET), []);

  return (
    <div className="backdrop" aria-hidden="true">
      <pre className="backdrop-code backdrop-a">{react}</pre>
      <pre className="backdrop-code backdrop-b">{java}</pre>
      <pre className="backdrop-code backdrop-c">{sql}</pre>
    </div>
  );
}
