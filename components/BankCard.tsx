import { formatAmount } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { AccountType } from "plaid";
import React from "react";
import Copy from "./Copy";

const BankCard = ({
  account,
  userName,
  showBalance = true,
}: CreditCardProps) => {
  return (
    <div className="flex flex-col">
      <Link
        href={`/transactions-history/?id${account.appwriteItemId}`}
        className="bank-card "
      >
        <div className="bank-card_content">
          <div className="">
            <h1 className="text-16 font-semibold text-white">{userName}</h1>
            <p className="font-ibm-plex-serif font-black text-white">
              {formatAmount(account.currentBalance)}
            </p>
          </div>
          <article className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-12 font-semibold text-white">{userName}</h1>
              <h2 className="text-12 font-semibold text-white">●● / ●●</h2>
            </div>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              ●●●● ●●●● ●●●●
              <span className="text-16">{account?.mask}</span>
            </p>
          </article>
        </div>
        <div className="bank-card-icon">
          <Image
            src={"/icons/Paypass.svg"}
            alt="Paypass"
            width={20}
            height={24}
          />
          <Image
            src={"/icons/mastercard.svg"}
            alt="mastercard"
            width={45}
            height={32}
          />
        </div>

        {/* <Image
          src={"/icons/lines.png"}
          alt="lines"
          width={316}
          height={190}
          className="absolure top-0 left-0" */}
        {/* /> */}
      </Link>

      {showBalance && <Copy title={account?.shareableId} />}
    </div>
  );
};

export default BankCard;
