package Angular.productapp.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "sanpham")
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long nid;

	@Column(name = "VNAMEPD", nullable=false)
	private String vnamepd;

	@Column(name = "NPRICEPD",nullable=false)
	private int npricepd;

	@Column(name = "VNOTEPD",nullable=false)
	private String vnotepd;
	
	public Product(String vnamepd, int npricepd, String vnotepd) {
		this.vnamepd = vnamepd;
		this.vnotepd = vnotepd;
		this.npricepd = npricepd;
	}
	public long getNid(long nid) {
		return nid;
	}

	public String getVnamepd() {
		return vnamepd;
	}

	public void setVnamepd(String vnamepd) {
		this.vnamepd = vnamepd;
	}

	public int getNpricepd() {
		return npricepd;
	}

	public void setNpricepd(int npricepd) {
		this.npricepd = npricepd;
	}

	public String getVnotepd() {
		return vnotepd;
	}

	public void setVnotepd(String vnotepd) {
		this.vnotepd = vnotepd;
	}

	@Override
	public String toString() {
		return "Product [nid = " + nid + ", vnamepd = " + vnamepd + ",npriece = " + npricepd + ", vnotepd =" + vnotepd
				+ "]";
	}
}