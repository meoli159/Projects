import { Revenue } from '../../models/revenue.js';

export const getRevenues = async (req, res) => {
  try {
    const revenues = await Revenue.find();

    if (!revenues.length > 0) return res.json({ message: 'There are no revenues!!' });

    return res.status(200).json({ data: revenues });
  } catch (error) {
    res.status(400).send('Bad Request');
  }
};

export const insertRevenue = async (req, res) => {
  try {
    // Tạo một mảng chứa dữ liệu giả mạo
    const fakeData = [];
    const currentDate = new Date(); // Lấy ngày hiện tại

    // Tạo 20 bản ghi dữ liệu giả mạo với ngày từ ngày hiện tại trở về 20 ngày trước đó
    for (let i = 0; i < 20; i++) {
      const randomAmount = Math.floor(Math.random() * 1000) + 500; // Số tiền ngẫu nhiên từ 500 đến 1500
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() - i
      );
      fakeData.push({ date: date.toISOString().split('T')[0], amount: randomAmount });
    }

    // Duyệt qua mỗi phần tử trong mảng và tạo một bản ghi mới cho mỗi phần tử
    const insertedData = await Promise.all(
      fakeData.map(async (data) => {
        return await Revenue.create(data);
      })
    );

    // Trả về dữ liệu đã được tạo thành công
    return res.status(200).json({ data: insertedData });
  } catch (error) {
    // Nếu có lỗi, bắt và trả về thông báo lỗi
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};
