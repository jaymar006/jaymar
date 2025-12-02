'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings as SettingsIcon, X, Upload, Lock, Check, AlertCircle, FileText, Image as ImageIcon } from 'lucide-react';

export default function Settings() {
    const [isOpen, setIsOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [pin, setPin] = useState('');
    const [error, setError] = useState('');
    const [uploadStatus, setUploadStatus] = useState<{ type: 'profile' | 'resume' | null; status: 'idle' | 'uploading' | 'success' | 'error'; message: string }>({
        type: null,
        status: 'idle',
        message: ''
    });

    const profileInputRef = useRef<HTMLInputElement>(null);
    const resumeInputRef = useRef<HTMLInputElement>(null);

    const CORRECT_PIN = '5364';

    const handlePinSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (pin === CORRECT_PIN) {
            setIsAuthenticated(true);
            setError('');
            setPin('');
        } else {
            setError('Incorrect PIN');
            setPin('');
        }
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: 'profile' | 'resume') => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploadStatus({ type, status: 'uploading', message: 'Uploading...' });

        const formData = new FormData();
        formData.append('file', file);
        formData.append('type', type);

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (response.ok) {
                setUploadStatus({ type, status: 'success', message: 'Upload successful! Refresh to see changes.' });
                // Optional: Reload page after a delay
                setTimeout(() => {
                    window.location.reload();
                }, 1500);
            } else {
                setUploadStatus({ type, status: 'error', message: data.message || 'Upload failed' });
            }
        } catch (err) {
            setUploadStatus({ type, status: 'error', message: 'Something went wrong' });
        }
    };

    return (
        <>
            {/* Floating Settings Button */}
            <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ rotate: 90 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 left-6 z-50 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary-hover transition-colors"
                aria-label="Settings"
            >
                <SettingsIcon size={24} />
            </motion.button>

            {/* Modal Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-card border border-border rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
                        >
                            {/* Header */}
                            <div className="flex justify-between items-center p-6 border-b border-border bg-secondary/5">
                                <h2 className="text-xl font-bold flex items-center gap-2">
                                    {isAuthenticated ? <SettingsIcon className="text-primary" /> : <Lock className="text-primary" />}
                                    {isAuthenticated ? 'Site Settings' : 'Admin Access'}
                                </h2>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-1 hover:bg-primary/10 rounded-full transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Body */}
                            <div className="p-6">
                                {!isAuthenticated ? (
                                    <form onSubmit={handlePinSubmit} className="space-y-4">
                                        <p className="text-muted text-sm">Please enter the PIN to access settings.</p>
                                        <div className="space-y-2">
                                            <input
                                                type="password"
                                                value={pin}
                                                onChange={(e) => setPin(e.target.value)}
                                                placeholder="Enter PIN"
                                                className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-center text-2xl tracking-widest"
                                                autoFocus
                                            />
                                            {error && (
                                                <p className="text-red-500 text-sm flex items-center gap-1 justify-center">
                                                    <AlertCircle size={14} /> {error}
                                                </p>
                                            )}
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full btn-primary py-2"
                                        >
                                            Unlock
                                        </button>
                                    </form>
                                ) : (
                                    <div className="space-y-6">
                                        {/* Profile Image Upload */}
                                        <div className="space-y-3">
                                            <label className="text-sm font-medium flex items-center gap-2">
                                                <ImageIcon size={18} className="text-primary" />
                                                Update Profile Image
                                            </label>
                                            <div className="flex items-center gap-4">
                                                <button
                                                    onClick={() => profileInputRef.current?.click()}
                                                    className="btn-secondary flex-1 flex items-center justify-center gap-2"
                                                >
                                                    <Upload size={18} />
                                                    Choose Image
                                                </button>
                                                <input
                                                    ref={profileInputRef}
                                                    type="file"
                                                    accept="image/*"
                                                    className="hidden"
                                                    onChange={(e) => handleFileUpload(e, 'profile')}
                                                />
                                            </div>
                                            {uploadStatus.type === 'profile' && (
                                                <p className={`text-sm flex items-center gap-1 ${uploadStatus.status === 'success' ? 'text-green-500' :
                                                        uploadStatus.status === 'error' ? 'text-red-500' : 'text-muted'
                                                    }`}>
                                                    {uploadStatus.status === 'success' && <Check size={14} />}
                                                    {uploadStatus.message}
                                                </p>
                                            )}
                                        </div>

                                        <div className="h-px bg-border" />

                                        {/* Resume Upload */}
                                        <div className="space-y-3">
                                            <label className="text-sm font-medium flex items-center gap-2">
                                                <FileText size={18} className="text-primary" />
                                                Update Resume (PDF)
                                            </label>
                                            <div className="flex items-center gap-4">
                                                <button
                                                    onClick={() => resumeInputRef.current?.click()}
                                                    className="btn-secondary flex-1 flex items-center justify-center gap-2"
                                                >
                                                    <Upload size={18} />
                                                    Choose PDF
                                                </button>
                                                <input
                                                    ref={resumeInputRef}
                                                    type="file"
                                                    accept=".pdf"
                                                    className="hidden"
                                                    onChange={(e) => handleFileUpload(e, 'resume')}
                                                />
                                            </div>
                                            {uploadStatus.type === 'resume' && (
                                                <p className={`text-sm flex items-center gap-1 ${uploadStatus.status === 'success' ? 'text-green-500' :
                                                        uploadStatus.status === 'error' ? 'text-red-500' : 'text-muted'
                                                    }`}>
                                                    {uploadStatus.status === 'success' && <Check size={14} />}
                                                    {uploadStatus.message}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
