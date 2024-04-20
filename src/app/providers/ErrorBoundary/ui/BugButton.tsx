import { Button } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classnames/classNames';
import { useEffect, useState } from 'react';

interface BugButtonProps {
  className?: string;
}

export const BugButton = ({ className }: BugButtonProps) => {
  const [error, setError] = useState(false);

  const handleThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return <Button onClick={handleThrow}>Bug Button</Button>;
};
