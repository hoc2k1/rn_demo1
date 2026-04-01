import { uiRegistry } from '../utils/uiRegistry';
import { UI_COMPONENTS } from '../constants/uiComponents';
import CustomHomeHeader from './CustomHomeHeader';

/**
 * File này là nơi tập trung tất cả các phần ghi đè UI.
 * Khi muốn "chế" lại UI của một trang nào đó, ta chỉ cần đăng ký tại đây.
 */

// Ghi đè HomeHeader mặc định bằng bản Custom
// uiRegistry.override(UI_COMPONENTS.HomeHeader, CustomHomeHeader);

// Bạn có thể thêm các override khác ở đây
// uiRegistry.override(UI_COMPONENTS.ProductCard, MyCustomProductCard);
