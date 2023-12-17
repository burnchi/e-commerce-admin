import React from 'react'

interface DashboardPageProps {
  params: {
    storeId: string;
  };
};

const DashboardPage:React.FC<DashboardPageProps> = ({ 
  params
}) => {
  return (
    <div>{params.storeId}</div>
  )
}

export default DashboardPage