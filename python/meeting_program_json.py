import pandas as pd
import json


def main():
    df = pd.read_excel("files/program.xlsx", dtype=str)
    df.fillna("", inplace=True)

    rows = {"rows": {f"{i}": row.tolist() for i, row in df.iterrows()}}

    with open("files/program.json", "w") as f:
        json.dump(rows, f)


if __name__ == "__main__":
    main()
