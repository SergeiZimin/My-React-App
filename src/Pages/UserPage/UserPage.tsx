import React from "react";
import { useParams } from "react-router-dom";
import { initialTableData } from "../../components/Users/CustomersData";

export const UserPage: React.FC = () => {

  const { id } = useParams<{ id: string }>();

  const user = initialTableData.find((data) => data.id === id);

  if (!user) {
    return <div>Пользователь не найден</div>;
  }

  return (
    <div>
      <h1>{user.firstName} {user.lastName}</h1>
    </div>
  );
};
