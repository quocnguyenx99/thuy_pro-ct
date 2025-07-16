import { notFound } from "next/navigation";
import TuyenDung from "../components/TuyenDung";
import TongQuanCoCauLaoDongThaco from "../components/TongQuanCoCauLaoDongThaco";
import DaoTaoVaPhatTrien from "../components/DaoTaoVaPhatTrien";
import ChinhSachDaiNgo from "../components/ChinhSachDaiNgo";
// import Cybersecurity from "../components/Cybersecurity";

export const dynamicParams = true;

export default function ReportDetailPage({ params }) {
  const { slug } = params;

  const renderContent = () => {
    switch (slug) {
      case "tong-quan-co-cau-lao-dong-thaco":
        return <TongQuanCoCauLaoDongThaco />;
      case "tuyen-dung":
        return <TuyenDung />;
      case "dao-tao-va-phat-trien":
        return <DaoTaoVaPhatTrien />;
      case "chinh-sach-dai-ngo":
        return <ChinhSachDaiNgo />;
      default:
        notFound();
    }
  };

  return <main className="min-h-screen bg-gray-50">{renderContent()}</main>;
}
