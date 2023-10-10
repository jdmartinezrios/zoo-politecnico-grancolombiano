import { NotificationPlacement } from 'antd/es/notification/interface';
import useNotification from 'antd/es/notification/useNotification';
import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';

type NotificationConfig = {
  message: string;
  placement?: NotificationPlacement;
};

const useShowNotification = () => {
  const [api, contextHolder] = useNotification();

  const buildContextHolder = () => {
    const container = document.createElement('div');
    document.body.appendChild(container);

    const root = createRoot(container);
    root.render(contextHolder);
  };

  useEffect(buildContextHolder, [contextHolder]);

  const showNotification = ({
    message,
    placement = 'topRight',
  }: NotificationConfig) => {
    api.success({
      message: message,
      placement: placement,
    });
  };

  const showErrorNotification = ({
    message,
    placement = 'topRight',
  }: NotificationConfig) => {
    api.error({
      message,
      placement,
    });
  };

  return {
    showNotification,
    showErrorNotification,
  };
};

export default useShowNotification;
