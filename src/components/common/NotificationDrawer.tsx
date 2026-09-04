import React from 'react';
import { Bell, CloudAlert, ShieldAlert, Clock, X, CheckCheck, AlertCircle } from 'lucide-react';
import { SmartNotification } from '../../types';

interface NotificationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: SmartNotification[];
  onMarkAllRead: () => void;
  onDismiss: (id: string) => void;
}

export const NotificationDrawer: React.FC<NotificationDrawerProps> = ({
  isOpen,
  onClose,
  notifications,
  onMarkAllRead,
  onDismiss,
}) => {
  if (!isOpen) return null;

  const getIcon = (type: SmartNotification['type']) => {
    switch (type) {
      case 'weather':
        return <CloudAlert className="w-4 h-4 text-sky-600" />;
      case 'safety':
        return <ShieldAlert className="w-4 h-4 text-rose-600" />;
      case 'itinerary':
        return <Clock className="w-4 h-4 text-amber-600" />;
      default:
        return <AlertCircle className="w-4 h-4 text-brand-600" />;
    }
  };

  return (
    <div className="absolute right-0 top-16 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-elevated border border-slate-200 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2">
      {/* Header */}
      <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
        <div className="flex items-center gap-2">
          <Bell className="w-4 h-4 text-brand-600" />
          <h3 className="text-xs font-bold text-slate-900">Smart Alerts & Notifications</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onMarkAllRead}
            className="text-[11px] text-brand-600 hover:underline font-semibold flex items-center gap-1"
          >
            <CheckCheck className="w-3 h-3" /> Mark Read
          </button>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-700 rounded-md"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="max-h-[360px] overflow-y-auto divide-y divide-slate-100">
        {notifications.length > 0 ? (
          notifications.map((notif: SmartNotification) => (
            <div
              key={notif.id}
              className={`p-3.5 transition-colors flex items-start justify-between gap-3 ${
                notif.read ? 'bg-white' : 'bg-brand-50/30'
              }`}
            >
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                  {getIcon(notif.type)}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-xs font-bold text-slate-900">{notif.title}</h4>
                    {!notif.read && (
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-600 shrink-0" />
                    )}
                  </div>
                  <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                    {notif.message}
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">
                    {notif.timestamp}
                  </span>
                </div>
              </div>

              <button
                onClick={() => onDismiss(notif.id)}
                className="text-slate-300 hover:text-slate-600 p-0.5"
                title="Dismiss"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ))
        ) : (
          <div className="p-8 text-center text-xs text-slate-400">
            No active alerts right now. Safe travels!
          </div>
        )}
      </div>
    </div>
  );
};
