import React from "react";
import { QrReader } from "react-qr-reader";

interface QRCodeScannerProps {
  setScannedValue: (data: any) => void;
  setShowModal: (data: boolean) => void;
}

const QRCodeScanner: React.FC<QRCodeScannerProps> = ({
  setScannedValue,
  setShowModal,
}) => {
  const constraints = {
    facingMode: "environment",
    width: { ideal: 1920 },
    height: { ideal: 1080 },
  };

  return (
    <>
      <QrReader
        constraints={constraints}
        onResult={(result, error) => {
          if (!!result) {
            setScannedValue(result?.text);
            setShowModal(false);
          }

          if (!!error) {
            console.log(error);
          }
        }}
        videoStyle={{ width: "100%" }}
      />
    </>
  );
};

export default QRCodeScanner;
